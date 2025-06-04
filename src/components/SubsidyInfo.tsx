import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubsidyInfo = () => {
  return (
    <section
      id="subsidy-info"
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-16">
          Что такое субсидия ЖКУ и зачем она нужна?
        </h2>

        <Card className="mb-12 border-2 border-blue-300 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 py-8">
            <CardTitle className="text-3xl md:text-4xl text-blue-700 text-center">
              <span className="text-4xl mr-3">💰</span>
              Простыми словами
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed text-center">
              Субсидия – это деньги от государства, которые помогают вам платить
              меньше за квартиру и коммунальные услуги каждый месяц.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <Card className="border-2 border-green-300 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-green-100 to-green-50 py-6">
              <CardTitle className="text-2xl md:text-3xl text-green-700 flex items-center gap-4">
                <span className="text-4xl">💰</span>
                Экономия денег
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Вы будете платить за свет, воду, газ и отопление значительно
                меньше. Государство возвращает вам часть денег каждый месяц.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-300 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 py-6">
              <CardTitle className="text-2xl md:text-3xl text-blue-700 flex items-center gap-4">
                <span className="text-4xl">🏠</span>
                Помощь с квартирой
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-xl text-gray-700 leading-relaxed">
                Субсидия покрывает все коммунальные услуги: электричество, воду,
                газ, отопление и услуги управляющей компании.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-orange-300 shadow-xl">
          <CardHeader className="py-8">
            <CardTitle className="text-3xl md:text-4xl text-orange-700 text-center flex items-center justify-center gap-4">
              <span className="text-5xl">⚠️</span>
              Важно помнить
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10">
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-6">
              <p className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                Субсидия помогает <strong>будущим платежам</strong>, но не
                списывает старые долги
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                Если у вас есть долги, нужно сначала договориться о рассрочке с
                управляющей компанией
              </p>
              <p className="flex items-start gap-3">
                <span className="text-2xl">•</span>
                Субсидию нужно продлевать каждые 6 месяцев
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubsidyInfo;
