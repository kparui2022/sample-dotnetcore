<template>
  <div class="date-picker">
    <Datepicker
      v-model="input_date"
      :enableTimePicker="false"
      @update:modelValue="handleDate"
      :format="getFormatedDate"
    ></Datepicker>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
export default {
  name: "Calender",
  components: {
    Datepicker,
  },
  props: {
    input_date: String,
  },
  setup(props, { emit }) {
    const date = ref();
    const getFormatedDate = (dt) => {
      const date = new Date(dt);
      return (
        date.getFullYear() +
        "-" +
        (date.getMonth() > 8
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1)) +
        "-" +
        (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
      );
    };
    const handleDate = (modelData) => {
      props.input_date = modelData;
      emit("date", getFormatedDate(modelData));
    };

    return {
      date,
      handleDate,
      getFormatedDate,
    };
  },
};
</script>

<style>
</style>