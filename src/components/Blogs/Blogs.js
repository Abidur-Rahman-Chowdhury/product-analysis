import React from 'react';

const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10  gap-y-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            <div className='w-80 border-2 mx-auto rounded-lg p-4'>
                <h1 className='text-center text-xl font-bold pb-3'>What is Context Api?</h1>
                <hr />
                <p className='mt-4'><span className='font-bold'>Answer: </span> কন্টেক্সট এপিআই হচ্ছে রিয়েক্ট এর নতুন সংযোজন যার মাধ্যমে আমরা গ্লোবালি ডাটা পাস করতে পারি। পূর্বে আমাদের চাইল্ড কম্পোনেন্ট এ ডাটা পাস করতে হলে প্রপস হিসেবে পাঠাতে হতো । সেই কম্পোনেন্ট এর যদি আরো কোন চাইল্ড থাকে তাকেও প্রপস হিসেবে ডাটা পাঠাতে হতো। এই পদ্ধতিকে বলা হয় প্রপস ড্রিলিং। যেটা করতে গিয়ে একজন ডেভেলপার এর অনেক খানি সময় লাগতো এবং সেইম টাইপের কোড বার বার লিখা লাগতো । এই ঝামেলাকে এডানোর জন্য এসেছে কন্টেক্সট এপিআই। যার মাধ্যমে পেরেন্ট কম্পোনেন্ট এ ডাটা পাস করলে সেই ডাটা সব চাইল্ড কম্পোনেন্ট এ সিম্পল কোড এর মাধ্যমে এক্সেস করা যায়।  </p>
            </div>
            <div className='w-80 border-2 mx-auto  rounded-lg p-4'>
                <h1 className='text-center  text-xl font-bold pb-3'>What is Semantic tag? </h1>
                <hr />
                <p className='mt-4'><span className='font-bold'>Answer: </span>  সিমেন্টিক ট্যাগ হলো এইচটিএমএল ৫ এর নতুন সংযোজন। যে সকল ট্যাগ দেখেই বুঝে ফেলা যায় সেই ট্যাগ এর কাজ কি । এবং বর্তমান ওয়েবসাইটে সিমেনটিক ট্যাগ ইউজ করা হয় কারণ সিমেন্টিক ট্যাগ ওয়েবসাইট এসইও করার জন্য বেশি জরুরি। কিছু সিমেন্টিক ট্যাগ এর উদাহরণ হলোঃ  <b> header, nav ,section ,article aside,footer</b> এই সকল ট্যাগ দেখলেই বুঝা যায় উক্ত ট্যাগ এর কাজ কি এবং তা ওয়েবসাইট এর কোথায় ব্যবহার করা দরকার।</p>
            </div>
            <div className='w-80 border-2 mx-auto  rounded-lg p-4'>
                <h1 className='text-center  text-xl font-bold pb-3'>Difference between inline / inline-block/ block element</h1>
                <hr />
                <p className='mt-4'><span className='font-bold'>Answer: </span> <b>Block Element: </b> ব্লক এলিমেন্ট হলো সেই সকল এলিমেন্ট যা ব্রাউজার এর সম্পূর্ন  width নিয়ে নেই । এবং এর নির্দিষ্ট width and height সেট করা যায়।  <br />
                    <b>Inline-element:</b> ইনলাইন এলিমেন্ট হলো সেই সকল এলিমেন্ট যাদের নির্দিষ্ট width and height  সেট করা যায় না। এরা শুধু কন্টেন্ট সমান জায়গা নেই। <br />
                    <b>Inline-block:</b> এইটা হচ্ছে যদি কোন ইনলাইন এলিমেন্টকে ব্লক এলিমেন্ট এর মত কাজ করাতে চাই তখন সিএসএস প্রোপার্টি display: inline-block; দিলে ইনলাইন এলিমেন্ট ইনলাইন ব্লক হয়ে যাবে তখন এলিমেন্ট ইনলাইন হওয়া সত্তেও তাতে নির্দিষ্ট width and height সেট করা যাবে।
                </p>
            </div>
            
        </div>
    );
};

export default Blogs;