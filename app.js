function animatedForm() {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    const user = {
        'field-name': '',
        'field-email': '',
        'field-password': '',
    };

    arrows.forEach((arrow) => {
        arrow.addEventListener('click', () => {
            const input = arrow.previousElementSibling;
            const parent = arrow.parentElement;
            const nextForm = parent.nextElementSibling;

            const inputClassname = parent.classList[0];
            user[inputClassname] = input.value;

            if (validateUser(user, inputClassname)) {
                nextSlide(parent, nextForm);
            } else {
                parent.style.animation = 'shake 0.5s ease';
            }

            parent.addEventListener(
                'animationend',
                () => (parent.style.animation = '')
            );
        });
    });
}

function validateUser(userObject, inputClassname) {
    if (
        inputClassname === 'field-name' &&
        userObject['field-name'].length < 6
    ) {
        console.log('Not enough characters');
        changeBodyBackgroundColor('rgb(189, 87, 87)');
        return false;
    } else if (
        inputClassname === 'field-email' &&
        userObject['field-email'].length < 6
    ) {
        console.log('Wrong email');
        changeBodyBackgroundColor('rgb(189, 87, 87)');
        return false;
    } else if (
        inputClassname === 'field-password' &&
        userObject['field-password'].length < 6
    ) {
        console.log('Wrong password');
        changeBodyBackgroundColor('rgb(189, 87, 87)');
        return false;
    }

    changeBodyBackgroundColor('rgb(87, 189, 130)');
    return true;
}

function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    nextForm.classList.remove('innactive');
}

function changeBodyBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

animatedForm();
