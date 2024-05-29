// Fonction pour ajouter une ligne d'employé au tableau
function addEmployeeRow(nom, prenom, telephone, departement) {
    const tableBody = document.getElementById("employeeTable").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    const cell3 = newRow.insertCell();
    const cell4 = newRow.insertCell();
    const cell5 = newRow.insertCell();
    
    cell1.innerHTML = nom;
    cell2.innerHTML = prenom;
    cell3.innerHTML = telephone;
    cell4.innerHTML = departement;
    cell5.innerHTML = '<button onclick="deleteEmployeeRow(this)">Supprimer</button>';
    const cell6 = newRow.insertCell();
    cell6.innerHTML = '<button onclick="editEmployeeRow(this)">Modifier</button>';
  }
  
  // Fonction pour supprimer une ligne d'employé
  function deleteEmployeeRow(button) {
    button.parentNode.parentNode.remove();
  }
  function editEmployeeRow(button, id) {
    // Récupérer les valeurs de la ligne d'employé
    const row = button.parentNode.parentNode;
    const nom = row.cells[0].innerHTML;
    const prenom = row.cells[1].innerHTML;
    const telephone = row.cells[2].innerHTML;
    const departement = row.cells[3].innerHTML;

    // Afficher les valeurs dans le formulaire d'ajout d'employé
    document.getElementById("nom").value = nom;
    document.getElementById("prenom").value = prenom;
    document.getElementById("telephone").value = telephone;
    document.getElementById("departement").value = departement;
    document.getElementById("employeeId").value = id;

    // Afficher le formulaire d'ajout d'employé
    document.getElementById("addEmployeeForm").style.display = "block";
  }
  
  // Gestion du formulaire d'ajout d'employé
  const employeeForm = document.getElementById("employeeForm");
  employeeForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
  
    // Récupérer les valeurs du formulaire
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const telephone = document.getElementById("telephone").value;
    const departement = document.getElementById("departement").value;
  
    // Ajouter la ligne d'employé au tableau (ici, vous pourriez utiliser une requête AJAX pour envoyer les données au serveur)
    addEmployeeRow(nom, prenom, telephone, departement);
  
    // Réinitialiser le formulaire
    employeeForm.reset();
  });
  
  // Remplissage initial du tableau (remplacé par des données dynamiques du serveur)
  addEmployeeRow("Diop", "Modou", "7877 7771", "Finance");
  addEmployeeRow("Martin", "lamine", "7877 7776", "Finance");

  