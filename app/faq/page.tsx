import PageHeader from '@/components/templates/PageHeader';
import FAQLayout, { FAQItem } from '@/components/templates/FAQLayout';

export default function FAQPage() {
  const generalFAQs: FAQItem[] = [
    {
      question: '見学はできますか？',
      answer: 'はい、随時見学を受け付けております。事前にお電話（03-1234-5678）またはお問い合わせフォームよりご予約ください。平日の10:00〜11:00の時間帯がおすすめです。',
    },
    {
      question: '通園バスはありますか？',
      answer: 'はい、通園バスを運行しています。ルートは年度によって変更になる場合がありますので、詳しくはお問い合わせください。バス代は月額3,500円です。',
    },
    {
      question: '給食はありますか？',
      answer: 'はい、園内の給食室で調理した温かい給食を提供しています。栄養士が献立を作成し、栄養バランスの取れた食事を心がけています。アレルギー対応も可能です。',
    },
    {
      question: '制服はありますか？',
      answer: 'はい、制服があります。通園服、体操服、帽子などをご購入いただきます。入園時の費用は約40,000円です。',
    },
  ];

  const admissionFAQs: FAQItem[] = [
    {
      question: '入園の流れを教えてください。',
      answer: '①入園説明会に参加（10月）→②願書提出（11月1日）→③面接（11月5日）→④入園決定→⑤入園準備→⑥入園式（4月）という流れになります。詳しくは募集要項ページをご覧ください。',
    },
    {
      question: '途中入園は可能ですか？',
      answer: 'はい、定員に空きがあれば随時受け付けております。まずはお電話でお問い合わせください。',
    },
    {
      question: '無償化の対象ですか？',
      answer: 'はい、3歳〜5歳児クラスは幼児教育・保育の無償化の対象です。保育料は無償ですが、給食費や教材費などは実費負担となります。',
    },
    {
      question: '認定こども園ですか？',
      answer: 'いいえ、当園は幼稚園です。1号認定（教育標準時間認定）でご利用いただけます。',
    },
  ];

  const lifeFAQs: FAQItem[] = [
    {
      question: '預かり保育はありますか？',
      answer: 'はい、早朝8:00〜9:00、午後14:00〜18:00まで預かり保育を実施しています。料金は時間により異なります。詳しくは入園案内ページをご覧ください。',
    },
    {
      question: 'オムツがまだ取れていませんが大丈夫ですか？',
      answer: 'はい、大丈夫です。お子様のペースに合わせて、トイレトレーニングをサポートします。',
    },
    {
      question: '保護者の出番は多いですか？',
      answer: '保護者参観や行事への参加をお願いしていますが、働いている保護者の方も多いため、無理のない範囲でご協力いただいています。',
    },
    {
      question: 'アレルギー対応はしていますか？',
      answer: 'はい、食物アレルギーのあるお子様には、可能な限り代替食を提供しています。入園時に詳しくお伺いします。',
    },
  ];

  return (
    <div>
      <PageHeader title="よくある質問" description="入園や園生活に関するよくあるご質問にお答えします" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">一般的な質問</h2>
            <FAQLayout items={generalFAQs} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">入園について</h2>
            <FAQLayout items={admissionFAQs} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">園生活について</h2>
            <FAQLayout items={lifeFAQs} />
          </div>
        </div>
      </div>
    </div>
  );
}
