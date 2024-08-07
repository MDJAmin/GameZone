import db from "@/db/db";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCurrency, formatNumber } from "@/lib/formatters";

async function getSoldData() {
  const data = await db.order.aggregate({
    _sum: { pricePaidInCents: true },
    _count: true,
  });
  // await wait(5000)

  return {
    amount: (data._sum.pricePaidInCents || 0) / 100,
    numberOfSales: data._count,
  };
}

// function wait(duration:number){
//   return new Promise((resolve) => setTimeout(resolve, duration));
// }

async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    db.user.count(),
    db.order.aggregate({
      _sum: { pricePaidInCents: true },
    }),
  ]);
  return {
    userCount,
    averageValuePerUser:
      userCount === 0
        ? 0
        : (orderData._sum.pricePaidInCents || 0) / userCount / 100,
  };
}

async function getGamesData() {
  const [activeCount, inactiveCount] = await Promise.all([
    db.product.count({ where: { isAvailableForPurchase: true } }),
    db.product.count({ where: { isAvailableForPurchase: false } }),
  ]);

  return { activeCount, inactiveCount };
}

export default async function AdminDashboard() {
  const [soldData, userData, gameData] = await Promise.all([
    getSoldData(),
    getUserData(),
    getGamesData(),
  ]);

  return (
    <div className="mt-10- mx-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sold Games"
        subtitle={`You have ${formatNumber(soldData.numberOfSales)} Orders`}
        body={formatCurrency(soldData.amount)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(userData.averageValuePerUser)} Value`}
        body={formatNumber(userData.userCount)}
      />
      <DashboardCard
        title="Available Games"
        subtitle={`${formatNumber(gameData.inactiveCount)} Unavailable Games`}
        body={formatNumber(gameData.activeCount)}
      />
    </div>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card className="mt-44">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-[#FF4553] opacity-75">
          {subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle>
          <p>{body}</p>
        </CardTitle>
      </CardContent>
    </Card>
  );
}
