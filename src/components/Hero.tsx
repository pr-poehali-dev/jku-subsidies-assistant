import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          ЖКУ: Простые Субсидии
        </h1>
        <p className="text-2xl md:text-3xl text-blue-600 font-medium mb-8">
          Помощь от государства – просто и понятно для каждого!
        </p>

        <Card className="p-8 mb-12 bg-white/80 backdrop-blur-sm border-2 border-blue-100">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Здесь мы помогаем вам разобраться с субсидиями на оплату
            жилищно-коммунальных услуг. Это государственная помощь, которая
            позволяет платить за квартиру меньше. Мы расскажем, как её получить!
          </p>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Button
            size="lg"
            className="h-16 text-xl font-semibold bg-blue-500 hover:bg-blue-600 text-white px-8"
            onClick={() =>
              document
                .getElementById("subsidy-info")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            🏠 Что такое субсидия?
          </Button>

          <Button
            size="lg"
            className="h-16 text-xl font-semibold bg-green-500 hover:bg-green-600 text-white px-8"
            onClick={() =>
              document
                .getElementById("eligibility")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ✅ Кому положена субсидия?
          </Button>

          <Button
            size="lg"
            className="h-16 text-xl font-semibold bg-orange-500 hover:bg-orange-600 text-white px-8"
            onClick={() =>
              document
                .getElementById("documents")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            📋 Какие нужны документы?
          </Button>

          <Button
            size="lg"
            className="h-16 text-xl font-semibold bg-purple-500 hover:bg-purple-600 text-white px-8"
            onClick={() =>
              document
                .getElementById("faq")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            ❓ Ответы на вопросы
          </Button>
        </div>

        <div className="mt-12 p-6 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <p className="text-lg text-gray-700">
            💡 <strong>Важно знать:</strong> Субсидия не "прощает" долги, а
            помогает с текущими платежами за ЖКУ
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
