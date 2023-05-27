const phoneNumberElements = document.querySelectorAll('.your-city--js');

phoneNumberElements.forEach(phoneNumberElement => {
    phoneNumberElement.addEventListener('click', () => {
        const phoneNumber = phoneNumberElement.textContent.trim();

        const dummy = document.createElement('input');
        dummy.style.display = 'none';
        document.body.appendChild(dummy);

        dummy.value = phoneNumber;
        dummy.select();

        document.execCommand('copy');

        document.body.removeChild(dummy);

        alert(`Номер телефона ${phoneNumber} скопирован в буфер обмена`);
    });
});




  