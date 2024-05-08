import Image from "next/image";

export const Main = () => {
    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          {/* <!-- text - start --> */}
          {/* <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">販売代行歴【30年】のノウハウで製品をとことん売りつくす</h2>
      
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">ジュエリー、時計、ブランド品、電化製品、服、靴、スーツ、お客様のニーズに合わせた製品を洗練されたスタッフが安心した管理体制で販売いたします。アパレル業界のあらゆる販売チャネルに対応。全国に拠点を展開し、迅速かつ丁寧な対応でお客様をサポートします。</p>
          </div> */}
          {/* <!-- text - end --> */}

        <div className=" mx-auto max-w-screen-xl px-4 md:px-8">
          
      
          <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8">
            {/* <!-- article - start --> */}
            <div className="bg-red-800 flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
              <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
              <Image src='/shopmall.jpg' width={1000} height={1000}  loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                {/* <span className="text-sm text-gray-400">March 15, 2021</span> */}
      
                <h2 className="text-xl font-bold text-white">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">販売代行歴【30年】のノウハウで製品をとことん売りつくす</a>
                </h2>
                      <p className="text-white">ジュエリー、時計、ブランド品、電化製品、お客様のニーズに合わせた製品を洗練されたスタッフが安心した管理体制で販売いたします。アパレル業界のあらゆる販売チャネルに対応。全国に拠点を展開し、迅速かつ丁寧な対応でお客様をサポートします。</p>
                      
                <div>
                  <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
      
            {/* <!-- article - start --> */}
            <div className="bg-gray-800 flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
              <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
              <Image src='/item3.jpg' width={1000} height={1000}  loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex flex-col gap-2 p-4 lg:p-6">
      
                <h2 className="text-xl font-bold text-white">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">販売スタッフの教育</a>
                </h2>
      
                <p className="text-white">当社では、定期的に販売スタッフの教育を行っています。最新のトレンドやお客様のニーズを把握し、常に高いレベルの接客サービスを提供できるよう努めています</p>
      
                <div>
                  <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                </div>
              </div>
            </div>

            {/* <!-- article - end --> */}
      
            {/* <!-- article - start --> */}
            <div className="flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
              <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
                <Image src='/wws.jpg ' width={1000} height={1000}  loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-sm text-gray-400">October 25, 2023</span>
      
                <h2 className="text-xl font-bold text-gray-800">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">WWSコクーンシティ店</a>
                </h2>
      
                <p className="text-gray-500">さいたま新都心コクーンシティ店に「WWS」が期間限定でオープン。オシャレに着る次世代スーツ。高機能かつシンプルなデザインを追求していて、大人かっこいいを手に入れる大チャンス。期間は10/2（水）～11/27（月）</p>
      
                <div>
                  <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                </div>
              </div>
            </div>

            
            {/* <!-- article - end --> */}
      
            {/* <!-- article - start --> */}

            {/*  */}
            <div className="bg-pink-600 flex flex-col items-center overflow-hidden rounded-lg border md:flex-row">
              <a href="#" className="group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48">
              <Image src='/tomjerry.png' width={1000} height={1000}  loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                <span className="text-sm text-white">July 19, 2023</span>
      
                <h2 className="text-xl font-bold text-white">
                  <a href="#" className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">トムとジェリー店</a>
                </h2>
      
                <p className="text-white">トムとジェリー店での代理販売を実施、売上を大幅にアップ。当社は、2023年6月から9月の間で、トムとジェリー店での代理販売を実施いたしました。その結果、前年同期比で売上を大幅にアップさせることができました。</p>
      
                <div>
                  <a href="#" className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read more</a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
          </div>
          
        </div>

      </div>
    );
  };