import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EligibilityCriteria = () => {
  return (
    <section id="eligibility" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Кому положена субсидия? Проверьте, подходите ли вы!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 border-green-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-xl md:text-2xl text-green-700 flex items-center gap-3">
                <span className="text-3xl">🇷🇺</span>
                Гражданство
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Вы должны быть гражданином России
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-xl md:text-2xl text-blue-700 flex items-center gap-3">
                <span className="text-3xl">🏠</span>
                Отношение к жилью
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Вы собственник квартиры, снимаете по договору, или член
                жилищного кооператива
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200">
            <CardHeader className="bg-purple-50">
              <CardTitle className="text-xl md:text-2xl text-purple-700 flex items-center gap-3">
                <span className="text-3xl">💵</span>
                Доходы и расходы
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Ваши расходы на ЖКУ превышают 22% от дохода семьи в месяц (в
                разных регионах может отличаться)
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-xl md:text-2xl text-orange-700 flex items-center gap-3">
                <span className="text-3xl">📋</span>
                Задолженность
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                У вас нет больших долгов за ЖКУ, или вы договорились о рассрочке
                платежей
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-blue-50 border-2 border-blue-300 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-blue-700 text-center">
              Примеры расчета
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6 text-lg text-gray-700">
              <div className="bg-white p-6 rounded-lg border">
                <p className="font-semibold text-xl mb-2">
                  Пример 1: Одинокий пенсионер
                </p>
                <p>Пенсия: 15 000 рублей</p>
                <p>Платежи за ЖКУ: 4 000 рублей</p>
                <p className="text-green-600 font-semibold">
                  4000 ÷ 15000 = 27% - субсидия положена! ✅
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <p className="font-semibold text-xl mb-2">
                  Пример 2: Семейная пара пенсионеров
                </p>
                <p>Общая пенсия: 30 000 рублей</p>
                <p>Платежи за ЖКУ: 5 500 рублей</p>
                <p className="text-red-600 font-semibold">
                  5500 ÷ 30000 = 18% - субсидия не положена ❌
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            size="lg"
            className="h-16 text-xl font-semibold bg-green-500 hover:bg-green-600 text-white px-12"
          >
            📞 Узнать точные критерии в вашем регионе
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
