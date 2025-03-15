document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('order-form');

    orderForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const partNumber = document.getElementById('part-number').value;
        const phoneNumber = document.querySelector('input[name="phone-number"]').value;
        const userId = document.getElementById('user-id')?.value; // Если пользователь авторизован

        try {
            const response = await fetch('/order/submit-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ partNumber, phoneNumber, userId }),
            });

            const result = await response.json();
            if (response.ok) {
                alert('Заказ успешно оформлен!');
                // Дополнительные действия после успешного оформления заказа
            } else {
                throw new Error(result.error || 'Ошибка при оформлении заказа');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert(error.message);
        }
    });
});