import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DocumentsList = () => {
  return (
    <section id="documents" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Какие бумаги собрать, чтобы получить субсидию?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-xl text-blue-700 flex items-center gap-3">
                <span className="text-3xl">📄</span>
                Паспорт
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700">
                Ваш паспорт гражданина России (оригинал и копия)
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-xl text-green-700 flex items-center gap-3">
                <span className="text-3xl">🏠</span>
                Документы на жилье
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700">
                Свидетельство о собственности или договор найма
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-xl text-purple-700 flex items-center gap-3">
                <span className="text-3xl">🔢</span>
                СНИЛС
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700">
                Ваш СНИЛС (страховое свидетельство)
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-xl text-orange-700 flex items-center gap-3">
                <span className="text-3xl">🧾</span>
                Квитанции ЖКУ
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700">
                Последние квитанции об оплате ЖКУ за 6 месяцев
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-teal-200">
            <CardHeader className="bg-teal-50">
              <CardTitle className="text-xl text-teal-700 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Справки о доходах
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700">
                Справки о доходах всех членов семьи за 6 месяцев (пенсия,
                зарплата)
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-indigo-200">
            <CardHeader className="bg-indigo-50">
              <CardTitle className="text-xl text-indigo-700 flex items-center gap-3">
                <span className="text-3xl">📖</span>
                Трудовая книжка
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700">
                Если вы не работаете – трудовая книжка
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-yellow-50 border-2 border-yellow-300 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-yellow-700 text-center flex items-center justify-center gap-3">
              <span className="text-3xl">📝</span>
              Дополнительные документы
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="text-lg text-gray-700 space-y-3">
              <p>• Свидетельства о рождении детей (если есть)</p>
              <p>• Свидетельство о браке или разводе</p>
              <p>• Справка о составе семьи</p>
              <p>• Банковские реквизиты для перечисления субсидии</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-green-50 border-2 border-green-300">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 flex items-center gap-3">
                <span className="text-3xl">✅</span>
                Полезные советы
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-lg text-gray-700 space-y-3">
                <p>• Обязательно сделайте копии всех документов</p>
                <p>• Возьмите с собой оригиналы для сверки</p>
                <p>• Если чего-то не хватает – не волнуйтесь, вам подскажут</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 border-2 border-blue-300">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700 flex items-center gap-3">
                <span className="text-3xl">🤝</span>
                Помощь в сборе
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-lg text-gray-700 space-y-3">
                <p>• Попросите родных помочь с копиями</p>
                <p>• В МФЦ могут помочь сделать копии</p>
                <p>• Справки можно получить в Пенсионном фонде</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DocumentsList;
