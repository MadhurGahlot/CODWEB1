function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const tabs = document.querySelectorAll('.tab');
    
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('active');
}