const { Job } = require("../database/models/job");

module.exports.refreshJobs = async () => {
  try {
    const jobs = await Job.find({
      paid: true,
      paidExpiresAt: {
        $gte: new Date(),
      },
      refreshFrequency: {
        $gt: 0,
      },
    });

    let jobsToRefresh = [];

    jobs.forEach(job => {
      if (
        new Date(
          new Date(job.publishedAt).valueOf() +
            1000 * 60 * 60 * 24 * job.refreshFrequency
        ) < new Date()
      ) {
        jobsToRefresh.push(job._id);
      }
    });

    console.log("Refreshing Jobs: ", jobsToRefresh);

    await Job.updateMany(
      { _id: { $in: jobsToRefresh } },
      { publishedAt: new Date().setHours(0, 0, 0, 0) }
    );
  } catch (error) {
    console.log("Error on refreshJobs CRON: ", error);
  }
};
