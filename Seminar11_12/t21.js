console.log("Task 21\n\n(результат на странице)");

function calendar(year, month){
    let date = new Date(year, month-1, 0);
    empty_cells = (date.getDay() - 7) % 7 + 7;
    parent = document.createElement("div");
    parent.style.display = "grid";
    parent.style.gridTemplateColumns = "repeat(7, 40px)";
    parent.style.textAlign = "right";

    days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    days.forEach(element => {
        label = document.createElement("div");
        label.innerHTML = element;
        parent.appendChild(label);
    });

    for (let i = 0; i < empty_cells; i++){
        parent.appendChild(document.createElement("div"));
    }

    for (let i = 0; i < date.getDate(); i++){
        day = document.createElement("div");
        day.innerHTML = `${i+1}`;
        parent.appendChild(day);
    }

    document.body.append(parent);
}

calendar(2021, 10);