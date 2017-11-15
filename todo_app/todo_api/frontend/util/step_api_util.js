const StepAPIUtil = {

  fetchSteps() {
    return $.ajax({
      method: "GET",
      url: "/api/steps/",
    });
  },

  createStep(step) {
    return $.ajax({
      method: 'POST',
      url: 'api/steps/',
      data: {
        step: step
      }
    });
  }

};

export default StepAPIUtil;
