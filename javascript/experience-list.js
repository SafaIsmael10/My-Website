const jobListItems = document.querySelectorAll(".job-list p");
const jobDetails = document.querySelectorAll(".job-details");
const jobList = document.querySelector(".job-list");
const backButtons = document.querySelectorAll(".back-button");

jobListItems.forEach(item => {
    item.addEventListener("click", () => {
        jobList.style.display = "none";
        jobDetails.forEach(detail => detail.style.display = "none");

        const jobId = item.getAttribute("data-job");
        document.getElementById(jobId).style.display = "flex";
    });
});

backButtons.forEach(button => {
    button.addEventListener("click", () => {
        jobList.style.display = "block";
        jobDetails.forEach(detail => detail.style.display = "none");
    });
});