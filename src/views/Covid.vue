<template>
  <el-card>
    <div slot="header">
      <el-form :inline="true" :model="formInline" label-width="120px">
        <el-form-item label="location:">
          <el-select
            v-model="formInline.location"
            placeholder="please select location"
          >
            <el-option
              v-for="item in cityData"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="age:">
          <div style="width: 200px">
            <el-slider v-model="formInline.age" range :min="0" :max="100" />
          </div>
        </el-form-item>
        <el-form-item label="health condition:">
          <el-select
            v-model="formInline.health"
            placeholder="please select health"
          >
            <el-option label="health" value="health"></el-option>
            <el-option label="general" value="general"></el-option>
            <el-option label="poor" value="poor"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">search</el-button>
        </el-form-item>
      </el-form>
    </div>
    <map-chart height="100%" />
  </el-card>
</template>


<script>
/**
 * @module view/Covid
 * @desc Home component
 * @vue-data {Number} counter - Current counter's value
 * @vue-computed {Array.<String>} fooList - A list of foo
 * @vue-computed {Array.<String>} barList - A list of bar
 * @vue-computed {String} message A message
 * @vue-event {Number} increment - Emit counter's value after increment
 * @vue-event {Number} decrement - Emit counter's value after decrement
 */

import { getCity } from "@/api/home";
import mapChart from "./mapChart";

export default {
  name: "covid",
  data() {
    return {
      formInline: {
        location: "",
        age: [18, 50],
        health: "health",
      },
      cityData: [],
      tableData: [],
    };
  },
  components: {
    mapChart,
  },
  methods: {
    getCityData() {
      getCity().then((res) => {
        this.cityData = res;
      });
    },
    initCharts() {},
    onSubmit() {},
    /**
     * Increment counter and emit event 'increment'
     */
    increment() {
      this.counter += this.step;
      this.$emit("increment", this.counter);
    },

    /**
     * Decrement counter and emit event 'decrement'
     */
    decrement() {
      this.counter -= this.step;
      this.$emit("decrement", this.counter);
    },

    /**
     * Show a dialog displaying counter value.
     * @param {Number} counter - Counter value
     */
    showDialog(counter) {
      alert(`Counter value is ${counter}.`);
    },
  },

  /**
   * Counter.vue `created` hook.
   */
  created() {
    console.info("Counter.vue: created()");
  },
  mounted() {
    console.info("Counter.vue: mounted()");
  },
};
</script>

<style style rel="stylesheet/scss" lang="scss" scoped>
::v-deep .el-card__body {
  height: calc(100vh - 200px);
}
</style>
