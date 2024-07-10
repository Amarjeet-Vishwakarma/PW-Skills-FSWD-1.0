const studentForm = document.querySelector(".studentForm");
const studentResult = document.querySelector("#blankContainer");

studentForm.addEventListener("submit", function(event){
    event.preventDefault();

    const marks = Array.from(this.elements["marks[]"]).map(elements => parseFloat(elements.value));

    const highestMarks = Math.max(...marks); 
    const studentIndex = marks.findIndex(marks => marks === highestMarks) + 1;
    const studentName = 'student ' +  (studentIndex);
    
    const result = isNaN(highestMarks) ? "Please enter valid marks for all students" : (studentName ) + " " + '  highest marks : '+(highestMarks);

    studentResult.innerText = result;
});