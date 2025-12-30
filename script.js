document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const instruction = document.getElementById('instruction');
    let clickCount = 0;
    const requiredClicks = 5; // Puedes cambiar cuántas veces hay que tocar

    envelope.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            clickCount++;
            instruction.textContent = `Toca ${requiredClicks - clickCount} veces más...`;

            if (clickCount >= requiredClicks) {
                envelope.classList.add('open');
                instruction.classList.add('hidden'); // Oculta la instrucción
                instruction.textContent = "¡Sorpresa!"; // Puedes cambiar el texto final
            }
        }
    });
});
