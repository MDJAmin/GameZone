"use client";
import React from "react";
import PageHeader from "../../_components/PageHeader";
import GameCreateForm from "../_components/GameCreateForm";

export default function AddGame() {
  return (
    <>
      <div className="px-[3rem]">
        <PageHeader>Add Game</PageHeader>
        <GameCreateForm />
      </div>
    </>
  );
}
