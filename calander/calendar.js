document.addEventListener("DOMContentLoaded", function () {
    var currentDate = new Date();
    var calendar = document.getElementById("calendar");
    renderCalendar(currentDate);
  
    function renderCalendar(date) {
      var year = date.getFullYear();
      var month = date.getMonth();
      var firstDay = new Date(year, month, 1);
      var lastDay = new Date(year, month + 1, 0);
      var daysInMonth = lastDay.getDate();
  
      var monthName = date.toLocaleString("default", { month: "long" });
      var calendarHTML = "<h2>" + monthName + " " + year + "</h2>";
      calendarHTML += "<table>";
      calendarHTML += "<tr>";
      calendarHTML += "<th>Sun</th>";
      calendarHTML += "<th>Mon</th>";
      calendarHTML += "<th>Tue</th>";
      calendarHTML += "<th>Wed</th>";
      calendarHTML += "<th>Thu</th>";
      calendarHTML += "<th>Fri</th>";
      calendarHTML += "<th>Sat</th>";
      calendarHTML += "</tr>";
  
      var dayOfWeek = firstDay.getDay();
      calendarHTML += "<tr>";
  
      for (var i = 0; i < dayOfWeek; i++) {
        calendarHTML += "<td></td>";
      }
  
      for (var day = 1; day <= daysInMonth; day++) {
        if (dayOfWeek > 6) {
          dayOfWeek = 0;
          calendarHTML += "</tr><tr>";
        }
  
        var currentDate = new Date(year, month, day);
        var isToday =
          currentDate.toDateString() === new Date().toDateString();
        
        var isIndianFestival = checkIndianFestival(month, day);
  
        calendarHTML +=
          '<td class="' +
          (isToday ? "today " : "") +
          (isIndianFestival ? "indian-festival" : "") +
          '">' +
          day +
          "</td>";
  
        dayOfWeek++;
      }
  
      calendarHTML += "</tr>";
      calendarHTML += "</table>";
  
      calendar.innerHTML = calendarHTML;
    }
  
    function checkIndianFestival(month, day) {
      var indianFestivals = [
        // Customize the list of Indian festivals here
        { month: 0, day: 1, name: "New Year" },
        // ...
      ];
  
      for (var i = 0; i < indianFestivals.length; i++) {
        var festival = indianFestivals[i];
        if (festival.month === month && festival.day === day) {
          return true;
        }
      }
  
      return false;
    }
  });
  