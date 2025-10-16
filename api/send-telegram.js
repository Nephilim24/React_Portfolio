export default async function handler(req, res) {
  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не разрешен' });
  }

  // Получаем данные из формы
  const { name, surname, email, phone, message } = req.body;

  // Ваши секретные данные (получим из переменных окружения)
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  // Формируем текст сообщения
  const telegramMessage = `
🔔 Новое сообщение с сайта!

👤 Имя: ${name} ${surname}
📧 Email: ${email || 'Не указан'}
📱 Телефон: ${phone || 'Не указан'}
💬 Сообщение: ${message || 'Без сообщения'}
  `;

  try {
    // Отправляем запрос в Telegram API
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'HTML',
        }),
      }
    );

    const data = await response.json();

    if (data.ok) {
      return res.status(200).json({ success: true, message: 'Сообщение отправлено!' });
    } else {
      return res.status(400).json({ success: false, error: data.description });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Ошибка сервера' });
  }
}