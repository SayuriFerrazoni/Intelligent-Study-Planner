let subjects = [];

document.getElementById("add-subject").addEventListener("click", () => {
    const name = document.getElementById("subject").value;
    const difficulty = Number(document.getElementById("difficulty").value);
    const deadline = document.getElementById("deadline").value;

    if (!name || !difficulty || !deadline) {
        alert("Please fill all subject fields.");
        return;
    }

    subjects.push({ name, difficulty, deadline });

    const li = document.createElement("li");
    li.textContent = `${name} (difficulty ${difficulty}, deadline ${deadline})`;
    document.getElementById("subjects-list").appendChild(li);

    document.getElementById("subject").value = "";
    document.getElementById("difficulty").value = "";
    document.getElementById("deadline").value = "";
});

document.getElementById("generate").addEventListener("click", async () => {
    if (subjects.length === 0) {
        alert("Add at least one subject.");
        return;
    }

    const hours = Number(document.getElementById("hours").value);
    const missedDay = document.getElementById("missed-day").value;

    const response = await fetch("http://127.0.0.1:5000/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            hours_per_day: hours,
            subjects: subjects,
            missed_day: missedDay
        })
    });

    const schedule = await response.json();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    const sortedDays = Object.keys(schedule).sort((a, b) => {
        const dateA = new Date(a.match(/\((.*?)\)/)[1]);
        const dateB = new Date(b.match(/\((.*?)\)/)[1]);
        return dateA - dateB;
    });
    
    sortedDays.forEach(day => {
        const dayBlock = document.createElement("div");
        dayBlock.innerHTML = `<h3>${day}</h3>`;
    
        schedule[day].forEach(item => {
            const p = document.createElement("p");
            p.textContent = `${item.subject}: ${item.hours}h`;
            dayBlock.appendChild(p);
        });
    
        resultDiv.appendChild(dayBlock);
    });
    
});
