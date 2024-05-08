'use client'

import React, { useState } from 'react'


export const Agency = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
// バナー
<div className="bg-white pb-6 sm:pb-8 lg:pb-12">
  <div className="relative flex flex-wrap bg-indigo-500 px-4 py-3 sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
    <div className="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base">代理店業務へのご依頼はこちらから</div>
        
    <a href="/" className="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm">Learn more</a>

    <div className="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-1 sm:w-auto xl:mr-3">
        {/* ヘッダーメニュ */}
        <header className="mb-2  ">

 {/* ナビゲーション  Agency Price   */}

      <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      onClick={() => setIsMenuOpen(true)}
      >
        {/* <svg  className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg> */}

        Menu

      </button>
      {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="p-5 bg-gray-900 border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          {/* <svg
                            className="w-8 text-white"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                          > */}
                            <rect x="3" y="1" width="7" height="10" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                          {/* </svg> */}
                          <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
                            valeur
                          </span>
                        </a>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {/* <svg className="w-5 text-white" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg> */}
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <a
                            href="/"
                            aria-label="Home"
                            title="Home"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            HOME
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="News"
                            title="News"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Agency
                          </a>
                        </li>
                        <li>
                          <a
                            href="/page2"
                            aria-label="Sales Agent"
                            title="Sales Agent"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            SHOP
                          </a>
                        </li>
                        <li>
                          <a
                            href="/"
                            aria-label="Recruit"
                            title="Recruit"
                            className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            CONTACT
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
    
      {/* <!-- buttons - end --> */}
    </header>






      {/* <button type="button" className="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200">
        <svg  className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button> */}
    </div>
  </div>
    
  {/* ヘッダー、後でコンポーネント化 */}

 

  {/*  コンテント１*/}
  <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
 
    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
   
      <div>
        <div className="h-64 overflow-hidden rounded-lg bg-white shadow-lg md:h-auto ">
          <img src="/agency.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center mb-8" />
          <img src="/item3.jpg" loading="lazy" alt="Photo by Martin Sanchez" className="h-full w-full object-cover object-center" />
          {/* <Image src='/item3.jpg' width={1000} height={1000}  loading="lazy" alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" /> */}
        </div>
      </div>

      <div className="md:pt-8">
    
        <h1 className="mb-2 text-center  font-bold text-gray-500 sm:text-3xl md:mb-2 md:text-left">仕組みや種類、選定方法などを詳しく解説</h1>
        <p className="text-center font-bold text-3xl text-gray-800 md:text-left mb-2">代理店とは</p>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
        代理店とは、商品やサービスを販売する企業（製造元や卸売業者など）と顧客との間の取引を仲介する事業者です。企業から委託を受けて、商品やサービスの販売や宣伝、アフターサービスなどを行います。<br />
        企業が直接顧客と取引を行うよりも、効率的に販売や宣伝を行うことができます。また、顧客のニーズを直接把握し、企業にフィードバックすることもできます。
        </p>

        
        <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">代行業者の選ぶポイント</h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">販売代行業者には、豊富な実績とノウハウを持つ業者を選びましょう。実績が豊富な業者は、さまざまな業種や商品の販売代行を経験しておりノウハウも豊富です。そのため自社の製品やサービスに合った販売戦略を立て、効率的に販売を成功させることができます。また自社の販売したいエリアに対応している業者を選ぶとよいでしょう。全国対応の業者もあれば、特定のエリアに特化した業者もあります。自社の販売したいエリアをカバーしている業者を選ぶことで、効率的に販売を拡大することができます。</p>
      
        <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">取次手数料の説明</h2>

        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">代理店の取次手数料の相場は、一般的に販売価格の10%から20%程度と言われています。ただし、商材や業界によって、相場は大きく異なります。例えば、保険や不動産などの高額商材は、販売価格の20%から30%程度の手数料が相場となっています。一方、家電や携帯電話などの低額商材は、販売価格の5%から10%程度の手数料が相場となっています。</p>
        

      </div>
    </div>
  </div>
</div>


{/* コンテント２ */}
<div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-md px-4 md:px-8">
    <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-3xl md:mb-2">服やアクセサリーを売る代理店の利点</h1>
    {/* <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-2">
      <li>初期費用やリスクが少ない</li>
      <li>販売のノウハウやサポートが受けられる</li>
      <li>販路を拡大できる</li>
      <li>顧客のニーズを直接把握できる</li>
      <li>収益を安定させやすい</li>
      <li>自分の好きなブランドや商品を扱える</li>
    </ul> */}
    

    {/* <div className='bg-gray-300'>    
        <p className="mb-2 text-2xl font-bold text-gray-800 sm:text-xl md:mb-6">1.初期費用やリスクが少ない</p>
        <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
        服やアクセサリーを売る代理店は、自社で商品を仕入れて販売するのではなく、企業から商品を仕入れて販売します。そのため、初期費用やリスクが少なく、小規模な事業者でも始めやすいというメリットがあります。
        </p>
    </div>
    <div>    
        <p className="mb-2 text-2xl font-bold text-gray-800 sm:text-xl md:mb-6">2.販売のノウハウやサポートが受けられる</p>
        <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
        企業から商品を仕入れる場合、販売のノウハウやサポートを受けることができます。例えば、商品の販売方法や陳列方法、マーケティング方法などのノウハウを教えてもらうことができます。また、商品の在庫管理や配送などの業務を代行してもらうこともできます。
        </p>
    </div>
    <div>    
        <p className="mb-2 text-2xl font-bold text-gray-800 sm:text-xl md:mb-6">3.販路を拡大できる</p>
        <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
        代理店は、企業の販売網を活用して、自社の商品を全国や海外に販売することができます。そのため、自社だけで販売する場合よりも、販路を拡大しやすくなります。
        </p>
    </div>
    <div>    
        <p className="mb-2 text-2xl font-bold text-gray-800 sm:text-xl md:mb-6">4.顧客のニーズを直接把握できる</p>
        <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
        代理店は、顧客と直接接することで、顧客のニーズを直接把握することができます。そのため、企業にフィードバックすることで、商品やサービスの改善につなげることができます。
        </p>
    </div>
    <div>    
        <p className="mb-2 text-2xl font-bold text-gray-800 sm:text-xl md:mb-6">5.収益を安定させやすい</p>
        <p className="mb-2 text-gray-500 sm:text-lg md:mb-8">
        企業との委託契約に基づいて販売を行うため、安定した収益を得ることができます。また、企業から歩合制で報酬を受け取る場合、売上が増えるほど収益も増えます。
        </p>
    </div> */}
    
    
    
    {/* <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">“This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.”</blockquote>

    <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:mb-8">
      <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600&h=350" loading="lazy" alt="Photo by Minh Pham" className="h-full w-full object-cover object-center" />
    </div>

    <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">Features</h2>

    <p className="text-gray-500 sm:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated. It may be used to display a sample of fonts or generate text for testing. Filler text is dummy text which has no meaning however looks very similar to real text.</p> */}
  </div>
</div>
{/*  */}

{/*  */}
<div className="bg-white py-6 sm:py-8 lg:py-12">
    
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    
    <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
      <div className="flex divide-x rounded-lg border bg-gray-50">
        {/* <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg  className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div> */}

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">販売コストを削減できる</h3>
          <p className="text-gray-500">代理店を利用することによって、自社で販売網を構築する必要がなくなり、販売コストを削減することができます。</p>
        </div>
      </div>
      <div className="flex divide-x rounded-lg border bg-gray-50">
        {/* <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg  className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div> */}

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">販売ノウハウやスキルを活用できる</h3>
          <p className="text-gray-500">商品やサービスの販売に関するノウハウやスキルを蓄積しています。そのため、代理店を利用することによって、これらのノウハウやスキルを活用して、販売力を強化することができます。</p>
        </div>
      </div>
      <div className="flex divide-x rounded-lg border bg-gray-50">
        {/* <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg  className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div> */}

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">販路を拡大できる</h3>
          <p className="text-gray-500">全国や海外に販路を有しています。そのため、代理店を利用することによって、自社の商品をより多くの顧客に届けることができます。</p>
        </div>
      </div>
      <div className="flex divide-x rounded-lg border bg-gray-50">
        {/* <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg  className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div> */}

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">顧客のニーズを直接把握できる</h3>
          <p className="text-gray-500">顧客と直接接することで、顧客ニーズを把握することができます。そのため、代理店を利用することによって、自社の商品やサービスの改善につなげることができます。

</p>
        </div>
      </div>
      <div className="flex divide-x rounded-lg border bg-gray-50">
        {/* <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg  className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div> */}

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">営業やマーケティングの負担を軽減できる</h3>
          <p className="text-gray-500">営業やマーケティングなどの業務を代行してもらうことで、自社の負担を軽減することができます。</p>
        </div>
      </div>
      <div className="flex divide-x rounded-lg border bg-gray-50">
        {/* <div className="flex items-center p-2 text-indigo-500 md:p-4">
          <svg  className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div> */}

        <div className="p-4 md:p-6">
          <h3 className="mb-2 text-lg font-semibold md:text-xl">新規事業の立ち上げや拡大に活用できる</h3>
          <p className="text-gray-500">代理店を活用することで、新規事業の立ち上げや拡大をスムーズに行うことができます。</p>
        </div>
      </div>
    </div>
  </div>
</div>

{/*  */}



</div>

// コンテント１



    );
};