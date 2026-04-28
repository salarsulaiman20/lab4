document.addEventListener('DOMContentLoaded', () => {
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    
    let count = 0;

    incrementBtn.addEventListener('click', () => {
        // Increment logic
        count++;
        
        // Update UI
        counterValue.textContent = count;
        
        // Add "bump" animation
        counterValue.classList.remove('bump');
        void counterValue.offsetWidth; // Force reflow
        counterValue.classList.add('bump');

        // Optional: Change background blob positions on click for extra dynamic feel
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach(blob => {
            const randomX = Math.random() * 40 - 20;
            const randomY = Math.random() * 40 - 20;
            blob.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    });
});
