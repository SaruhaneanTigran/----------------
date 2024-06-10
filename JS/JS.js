

//Валидация формы
    function validateForm() {
        var name = document.forms["myForm"]["Имя"].value;
        var lastName = document.forms["myForm"]["Фамилия"].value;
        var email = document.forms["myForm"]["Почта"].value;
        var phone = document.forms["myForm"]["Телефон"].value;

        if (name == "") {
            alert("Введите ваше имя");
            return false;
        }

        if (lastName == "") {
            alert("Введите вашу фамилию");
            return false;
        }

        if (email == "") {
            alert("Введите ваш адрес электронной почты");
            return false;
        }

        if (phone == "") {
            alert("Введите ваш номер телефона");
            return false;
        }

        return true;
    }


//Уведомления об успешной отправке данных
    function validateForm() {
        var name = document.forms["myForm"]["Имя"].value;
        var lastName = document.forms["myForm"]["Фамилия"].value;
        var email = document.forms["myForm"]["Почта"].value;
        var phone = document.forms["myForm"]["Телефон"].value;

        if (name == "") {
            alert("Введите ваше имя");
            return false;
        }

        if (lastName == "") {
            alert("Введите вашу фамилию");
            return false;
        }

        if (email == "") {
            alert("Введите ваш адрес электронной почты");
            return false;
        }

        if (phone == "") {
            alert("Введите ваш номер телефона");
            return false;
        }

        // Допустим, что форма успешно отправлена на сервер
        alert("Данные успешно отправлены!");

        // Опционально: можно добавить перенаправление на другую страницу
        window.location.href="index.html";

      

        return true;
    }


    //Добавляем скрипт для подсветки полей
    document.addEventListener("DOMContentLoaded", function() {
        const inputName = document.getElementById('inputName');
        const inputLastName = document.getElementById('inputLastName');
        const inputEmail = document.getElementById('inputEmail');
        const inputPhone = document.getElementById('inputPhone');

        inputName.addEventListener('input', function() {
            if (!this.checkValidity()) {
                this.style.border = '2px solid red';
            } else {
                this.style.border = '1px solid #ccc';
            }
        });

        inputLastName.addEventListener('input', function() {
            if (!this.checkValidity()) {
                this.style.border = '2px solid red';
            } else {
                this.style.border = '1px solid #ccc';
            }
        });

        inputEmail.addEventListener('input', function() {
            if (!this.checkValidity()) {
                this.style.border = '2px solid red';
            } else {
                this.style.border = '1px solid #ccc';
            }
        });

        inputPhone.addEventListener('input', function() {
            if (!this.checkValidity()) {
                this.style.border = '2px solid red';
            } else {
                this.style.border = '1px solid #ccc';
            }
        });
    });




//Добавляем код для заполнения списка городов

    document.addEventListener("DOMContentLoaded", function() {
        const selectCity = document.getElementById('selectCity');
        const cities = ['Бельцы', 'Бендеры', 'Бессарабка', 'Бируинца', 'Бричаны', 'Быковец', 
        'Вадул-луй-Водэ', 'Ватра', 'Вулканешты', 'Гиндешты', 'Глодяны', 'Григориополь', 'Днестровск', 
        'Дондюшаны', 'Дрокия', 'Дубоссары', 'Дурлешты', 'Единец', 'Каинары', 'Калараш', 'Каменка', 'Кантемир', 
        'Каушаны', 'Кагул', 'Кишинёв', 'Кодру', 'Комрат', 'Корнешты', 'Костешты', 'Красное', 'Криково', 'Криулень', 
        'Купчинь', 'Леова', 'Липканы', 'Маркулешты', 'Маяк', 'Ниспорены', 'Новотираспольский', 'Новые Анены', 'Окница', 
        'Орхей', 'Отачь', 'Резина', 'Рыбница', 'Рышканы', 'Слободзея', 'Сороки', 'Страшены', 'Сынджера', 'Сынжерей', 'Тараклия',
         'Твардица', 'Теленешты', 'Тирасполь','Унгень', 'Фалешты', 'Флорешты', 'Фрунзе', 'Хынчешты', 'Чадыр-Лунга', 'Чимишлия', 'Шолданешты', 'Штефан-Водэ', 'Яловены', 'Яргара'];
        // добавляем города в список
        cities.forEach(function(city) {
            const option = document.createElement('option');
            option.textContent = city;
            option.value = city;
            selectCity.appendChild(option);
        });

        // обработчик события для смены значения в поле выбора города
        selectCity.addEventListener('change', function() {
            const selectedCity = this.value;
            // можно выполнить дополнительные действия при выборе города, например, вывести его значение
            console.log('Выбран город: ' + selectedCity);
        });
    });



    document.addEventListener('DOMContentLoaded', function() {
        var birthdateInput = document.getElementById('birthdate');
        var today = new Date();
        var minAge = 18;
        var minDate = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
        birthdateInput.setAttribute('max', minDate.toISOString().split('T')[0]);
    });




    // Функция для сохранения данных в локальном хранилище
        function saveData() {
            var formData = {
                name: document.forms["myForm"]["Имя"].value,
                lastName: document.forms["myForm"]["Фамилия"].value,
                email: document.forms["myForm"]["Почта"].value,
                dob: document.forms["myForm"]["Дата рождения"].value,
                location: document.forms["myForm"]["Местожительство"].value,
                phone: document.forms["myForm"]["Телефон"].value
            };
    
            localStorage.setItem('formData', JSON.stringify(formData));
            alert("Данные сохранены в локальном хранилище.");
        }
    

