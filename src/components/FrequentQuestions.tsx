import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FrequentQuestions = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Ответы на частые вопросы о субсидиях
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="border-2 border-blue-200 rounded-lg bg-white"
          >
            <AccordionTrigger className="text-xl font-semibold text-blue-700 px-6 py-4 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="text-2xl">❓</span>
                Как часто нужно подавать на субсидию?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-700 px-6 pb-6 leading-relaxed">
              Субсидию нужно переоформлять каждые 6 месяцев. За месяц до
              окончания срока вам придет уведомление о необходимости подать
              документы заново. Это нужно, чтобы государство проверило, не
              изменились ли ваши доходы.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="border-2 border-green-200 rounded-lg bg-white"
          >
            <AccordionTrigger className="text-xl font-semibold text-green-700 px-6 py-4 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                Как рассчитать размер моей субсидии?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-700 px-6 pb-6 leading-relaxed">
              Размер субсидии зависит от ваших доходов, размера платежей за ЖКУ
              и региона. Например, если ваша пенсия 15 000 рублей, а платите за
              ЖКУ 4 000 рублей, то субсидия может составить около 1 500-2 000
              рублей в месяц. Точную сумму рассчитают в соцзащите.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="border-2 border-orange-200 rounded-lg bg-white"
          >
            <AccordionTrigger className="text-xl font-semibold text-orange-700 px-6 py-4 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                Могут ли субсидию отменить?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-700 px-6 pb-6 leading-relaxed">
              Да, субсидию могут отменить, если: изменились ваши доходы в
              большую сторону, появились долги по ЖКУ, вы переехали в другую
              квартиру или не подали документы для переоформления вовремя. В
              этом случае вам пришлют уведомление с объяснением причин.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="border-2 border-purple-200 rounded-lg bg-white"
          >
            <AccordionTrigger className="text-xl font-semibold text-purple-700 px-6 py-4 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="text-2xl">📱</span>
                Что делать, если не умею пользоваться Госуслугами?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-700 px-6 pb-6 leading-relaxed">
              Не переживайте! Вы можете подать документы лично в МФЦ или отделе
              социальной защиты. Там специалисты помогут заполнить заявление и
              примут все документы. Также можете попросить родных или знакомых
              помочь с интернетом.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-5"
            className="border-2 border-teal-200 rounded-lg bg-white"
          >
            <AccordionTrigger className="text-xl font-semibold text-teal-700 px-6 py-4 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                Что делать при отказе в субсидии?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-700 px-6 pb-6 leading-relaxed">
              В уведомлении об отказе будет указана причина. Чаще всего
              отказывают из-за высоких доходов, наличия долгов или неполного
              пакета документов. Вы можете обратиться в соцзащиту за
              разъяснениями, исправить недочеты и подать заявление повторно.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-6"
            className="border-2 border-indigo-200 rounded-lg bg-white"
          >
            <AccordionTrigger className="text-xl font-semibold text-indigo-700 px-6 py-4 hover:no-underline">
              <span className="flex items-center gap-3">
                <span className="text-2xl">💳</span>
                Как получают деньги от субсидии?
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-lg text-gray-700 px-6 pb-6 leading-relaxed">
              Субсидию можно получить несколькими способами: перечисление на
              банковскую карту, через почту России, или зачет при оплате ЖКУ.
              Самый удобный способ - на банковскую карту, деньги приходят
              автоматически каждый месяц.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8">
            <p className="text-xl text-gray-700 mb-4">
              <span className="text-3xl">📞</span> Остались вопросы?
            </p>
            <p className="text-lg text-gray-600">
              Звоните на горячую линию:{" "}
              <strong className="text-blue-600">8-800-xxx-xx-xx</strong>
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Или обратитесь в ближайший МФЦ - там обязательно помогут!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
