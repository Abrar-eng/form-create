function Student(name, id, cgpa) {
    this.name = name;
    this.id = id;
    this.cgpa = cgpa;
}

document.addEventListener('DOMContentLoaded', function () {
    const studentForm = document.getElementById('studentForm');
    const displayResult = document.getElementById('displayResult');
    const addButton = document.getElementById('addButton');
    const deleteButton = document.getElementById('deleteButton');

    const studentData = []; 

    addButton.addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const cgpa = document.getElementById('cgpa').value;
        

        const student = new Student(name, id, cgpa);

        
        studentData.push(student);

        
        displayStudents();
    });

    deleteButton.addEventListener('click', function () {
        const idToDelete = document.getElementById('id').value;

        
        studentData.forEach((student, index) => {
            if (student.id === idToDelete) {
                studentData.splice(index, 1);
                return;
            }
        });

        
        displayStudents();
    });

    function displayStudents() {
        
        displayResult.innerHTML = '';

       
        studentData.forEach(student => {
            displayResult.innerHTML += `<p>Name: ${student.name}, ID: ${student.id}, cgpa: ${student.cgpa}</p>`;
        });
    }
});
