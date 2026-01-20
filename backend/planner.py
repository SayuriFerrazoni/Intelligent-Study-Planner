from datetime import datetime, timedelta

def generate_plan(subjects, hours_per_day, missed_day=None):
    today = datetime.today().date()

    if missed_day:
        today = datetime.strptime(missed_day, "%Y-%m-%d").date() + timedelta(days=1)

    # Calculate priorities
    for s in subjects:
        deadline = datetime.strptime(s["deadline"], "%Y-%m-%d").date()
        days_left = max((deadline - today).days, 1)
        s["priority"] = s["difficulty"] / days_left

    total_priority = sum(s["priority"] for s in subjects)

    last_day = max(
        datetime.strptime(s["deadline"], "%Y-%m-%d").date()
        for s in subjects
    )

    schedule = {}
    current_day = today

    while current_day <= last_day:
        day_label = current_day.strftime("%A (%Y-%m-%d)")
        schedule[day_label] = []

        for s in subjects:
            hours = round(hours_per_day * (s["priority"] / total_priority), 1)
            schedule[day_label].append({
                "subject": s["name"],
                "hours": hours
            })

        current_day += timedelta(days=1)

    return schedule
