import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SubsidyInfo = () => {
  return (
    <section id="subsidy-info" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Что такое субсидия на ЖКУ и зачем она нужна?
        </h2>

        <Card className="mb-8 border-2 border-blue-200">
          <CardHeader className="bg-blue-50">
            <CardTitle className="text-2xl md:text-3xl text-blue-700 text-center">
              Простыми словами
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center">
              Субсидия – это деньги, которые государство возвращает вам за
              оплату квартиры и коммунальных услуг, чтобы уменьшить ваши
              расходы.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-xl md:text-2xl text-green-700 flex items-center gap-3">
                <span className="text-3xl">💰</span>
                Экономия денег
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Вы будете платить за ЖКУ значительно меньше. Государство
                компенсирует часть ваших расходов каждый месяц.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-xl md:text-2xl text-blue-700 flex items-center gap-3">
                <span className="text-3xl">🏠</span>
                Помощь с квартирой
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Субсидия покрывает расходы на свет, воду, газ, отопление,
                управление домом и другие коммунальные услуги.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-orange-50 border-2 border-orange-200">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-orange-700 text-center flex items-center justify-center gap-3">
              <span className="text-4xl">⚠️</span>
              Важно помнить
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
              <p>
                • Субсидия помогает <strong>текущим платежам</strong>, но не
                списывает старые долги
              </p>
              <p>
                • Если у вас есть долги, нужно сначала договориться о рассрочке
                с управляющей компанией
              </p>
              <p>• Субсидию нужно переоформлять каждые 6 месяцев</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubsidyInfo;
