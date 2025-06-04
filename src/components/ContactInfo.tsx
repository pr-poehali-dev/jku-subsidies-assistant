import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactInfo = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gradient-to-b from-blue-50 to-green-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-16">
          Мы всегда готовы помочь! 🤝
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <Card className="border-2 border-green-300 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 py-8">
              <CardTitle className="text-3xl text-green-700 flex items-center gap-4">
                <span className="text-4xl">📞</span>
                Телефон горячей линии
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-3xl font-bold text-gray-800 mb-4">
                8-800-555-00-00
              </p>
              <p className="text-xl text-gray-600 mb-2">Звонок бесплатный</p>
              <p className="text-xl text-gray-600">
                Работаем: Пн-Пт 9:00-18:00
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 py-8">
              <CardTitle className="text-3xl text-blue-700 flex items-center gap-4">
                <span className="text-4xl">🏢</span>
                МФЦ и соцзащита
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 mb-6">
                Найдите ближайший офис в вашем городе
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white h-14 text-xl px-6 rounded-xl shadow-lg">
                Найти адрес МФЦ
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white border-2 border-gray-300 mb-12 shadow-xl">
          <CardHeader className="py-8">
            <CardTitle className="text-3xl text-gray-700 text-center flex items-center justify-center gap-4">
              <span className="text-4xl">💌</span>
              Напишите нам
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="space-y-8">
              <div>
                <label className="block text-xl font-semibold text-gray-700 mb-3">
                  Ваше имя:
                </label>
                <input
                  type="text"
                  className="w-full p-6 text-xl border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="Введите ваше имя"
                />
              </div>

              <div>
                <label className="block text-xl font-semibold text-gray-700 mb-3">
                  Телефон или почта:
                </label>
                <input
                  type="text"
                  className="w-full p-6 text-xl border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="Как с вами связаться"
                />
              </div>

              <div>
                <label className="block text-xl font-semibold text-gray-700 mb-3">
                  Ваш вопрос:
                </label>
                <textarea
                  rows={5}
                  className="w-full p-6 text-xl border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
                  placeholder="Расскажите, с чем нужна помощь"
                />
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="h-16 text-2xl font-semibold bg-green-500 hover:bg-green-600 text-white px-12 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <span className="text-3xl mr-3">📤</span>
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-100 to-amber-100 border-2 border-yellow-300 shadow-xl">
          <CardContent className="p-10">
            <div className="text-center">
              <p className="text-2xl text-gray-700 mb-6">
                <span className="text-4xl">💡</span>{" "}
                <strong>Важный совет:</strong>
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Если вам нужна помощь с компьютером или телефоном, попросите
                родных, детей, внуков или друзей помочь вам разобраться с этим
                сайтом. Вместе всё получится!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactInfo;
