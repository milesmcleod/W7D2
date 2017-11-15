const StepAPIUtil = {

  fetchSteps() {
    return $.ajax({
      method: "GET",
      url: "/api/steps/",
    });
  }

};

export default StepAPIUtil;
