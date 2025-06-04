import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  return (
    <section className="py-16 px-4 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Мы всегда готовы помочь! 🤝
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl text-green-700 flex items-center gap-3">
                <span className="text-3xl">📞</span>
                Телефон горячей линии
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-2xl font-bold text-gray-800 mb-2">
                8-800-xxx-xx-xx
              </p>
              <p className="text-lg text-gray-600">Звонок бесплатный</p>
              <p className="text-lg text-gray-600">
                Работаем: Пн-Пт 9:00-18:00
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl text-blue-700 flex items-center gap-3">
                <span className="text-3xl">🏢</span>
                МФЦ и соцзащита
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 mb-2">
                Найдите ближайший офис в вашем городе
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                Найти адрес МФЦ
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-2 border-gray-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-700 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">💌</span>
              Напишите нам
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Телефон или почта:
                </label>
                <input
                  type="text"
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Как с вами связаться"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-700 mb-2">
                  Ваш вопрос:
                </label>
                <textarea
                  rows={4}
                  className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  placeholder="Расскажите, с чем нужна помощь"
                />
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="h-14 text-xl font-semibold bg-green-500 hover:bg-green-600 text-white px-12"
                >
                  📤 Отправить сообщение
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 border-2 border-yellow-300">
          <CardContent className="p-8">
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-4">
                <span className="text-3xl">💡</span> <strong>Совет:</strong>
              </p>
              <p className="text-lg text-gray-600">
                Если вам нужна помощь с компьютером или телефоном, попросите
                родных или друзей помочь вам с сайтом. Вместе всё получится!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactInfo;
