var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a "+this.job);
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer";

// james' second job
james.sayJob();
