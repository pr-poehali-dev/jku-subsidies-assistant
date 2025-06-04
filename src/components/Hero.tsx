import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-blue-50 to-green-50 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
          Добро пожаловать в<br />
          <span className="text-blue-600">ЖКУ: Простые Субсидии!</span>
        </h1>
        <p className="text-3xl md:text-4xl text-gray-700 font-medium mb-12 leading-relaxed">
          Помогаем разобраться с субсидиями на оплату жилищно-коммунальных услуг
          и освоить интернет!
        </p>

        <Card className="p-10 mb-16 bg-white/90 backdrop-blur-sm border-2 border-blue-200 shadow-lg">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
            <span className="text-2xl">🏠</span> Субсидия – это государственная
            помощь, чтобы вам было легче платить за квартиру, воду, свет, газ и
            отопление.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            <span className="text-2xl">✨</span> Это не кредит и не долг, а
            безвозмездная поддержка от государства.
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <Button
            size="lg"
            className="h-20 text-2xl font-semibold bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              document
                .getElementById("subsidy-info")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-3xl mr-3">🏠</span>
            Что такое субсидия ЖКУ?
          </Button>

          <Button
            size="lg"
            className="h-20 text-2xl font-semibold bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              document
                .getElementById("eligibility")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-3xl mr-3">✅</span>
            Кому положена субсидия?
          </Button>

          <Button
            size="lg"
            className="h-20 text-2xl font-semibold bg-orange-500 hover:bg-orange-600 text-white px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              document
                .getElementById("documents")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-3xl mr-3">📋</span>
            Как подать заявление?
          </Button>

          <Button
            size="lg"
            className="h-20 text-2xl font-semibold bg-purple-500 hover:bg-purple-600 text-white px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-3xl mr-3">🤝</span>
            Задать вопрос
          </Button>
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-2xl p-8 shadow-lg">
          <p className="text-2xl text-gray-800 leading-relaxed">
            <span className="text-3xl">💡</span>{" "}
            <strong className="text-amber-700">Важно знать:</strong> Субсидия
            помогает снизить будущие платежи за ЖКУ, но не покрывает старые
            долги
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
