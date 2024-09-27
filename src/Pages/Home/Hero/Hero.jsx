import img01 from '../../../assets/images/Rectangle01.png'
import img02 from '../../../assets/images/Rectangle02.png'

const Hero = () => {
    return (
        <div className="bg-[#1A273A] flex flex-row items-end w-full  h-screen">
            this is hero!
            {/* text */}
            <div>
g
            </div>
            {/* image */}
            <div className="flex w-full flex-row items-end justify-end">
                <div className="flex flex-row">
                    <div className=" 2xl:w-[174px] 2xl:h-[358px] xl:w-[160px] xl:h-[330px] lg:w-[140px] lg:h-[300px] md:w-[120px] md:h-[270px] sm:w-[100px] sm:h-[240px]">
                        <img className='2xl:w-[174px] 2xl:h-[358px] xl:w-[160px] xl:h-[330px] lg:w-[140px] lg:h-[300px] md:w-[120px] md:h-[270px] sm:w-[100px] sm:h-[240px] ' src={img01} alt="" />
                    </div>
                    <div className="rotate-180 2xl:w-[174px] 2xl:h-[358px] xl:w-[160px] xl:h-[330px] lg:w-[140px] lg:h-[300px] md:w-[120px] md:h-[270px] sm:w-[100px] sm:h-[240px]">
                        <img className='2xl:w-[174px] 2xl:h-[358px] xl:w-[160px] xl:h-[330px] lg:w-[140px] lg:h-[300px] md:w-[120px] md:h-[270px] sm:w-[100px] sm:h-[240px] ' src={img02} alt="" />
                    </div>
                </div>
                <img className="2xl:w-[610px] xl:w-[500px] lg:w-[400px] md:w-[300px] sm:w-[250px]" src="https://s3-alpha-sig.figma.com/img/e43f/e638/6b90d9b316ace1dbed0d467714c88a93?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fIvDKfst3CidZmqtPVM6aJfFm5RlvbSGBo3O1etGzFFI8YQSIMS~t0-35gvbd1EFK8E~2D3H06QcZ6NjRybSeC33AWKSS8fxBgegRZdRJogcW0s1CSEwdCyOwc8RnGDBzue7vR0CRf78mzRr0WAhsuuACy4H9Z-1-cJ4H6~N~AA4giG-CVFSCb4LNtgNPzbbWZn5i2T2FQ81aYVNVXRPlNTd1tJsXPzuLB5GbKh7GBBudDripngi~9ISv3vbYj5X8oX5viETcqeWu120wxYbmodaIXftXZgGLWcSkaITZARH~ZKBE31C5qtb6NogZlntt3kILNRvghq37CmmjTetSg__" alt="" />
            </div>
        </div>
    );
};

export default Hero;