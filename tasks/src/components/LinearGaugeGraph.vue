<template>
  <div>
    <h1>Linear Gauge</h1>
    <LinearGauge
      className="h-12"
      data={0.47}
      id="linear-gauge-default"
      label="Linear Gauge Graph"
    />
  </div>
</template>

<script setup>
import LinearGauge  from "@headless-charts/react";
</script>

<style lang="scss" scoped></style>
