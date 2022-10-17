import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TbWorld } from 'react-icons/tb';
import { AiFillGithub } from 'react-icons/ai';
import Loading from '../Shared/Loading';

const Design = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch('https://safe-forest-62634.herokuapp.com/design')
                .then(res => res.json())
                .then(data => setData(data))
            setLoading(false);
        }, 800);
    }, []);
    
    return (
        <div className=''>
            <p>Design</p>
            <div className="flex grid gap-y-8 gap-x-8 lg:grid-cols-3 md:grid-cols-2 mt-10">
                {
                    loading ? (<Loading />) : (
                        data.map((item, index) =>
                            <div key={index}>
                                <figure className="w-92 md:92 rounded-xl p-8 dark:bg-slate-100">
                                    <img className="w-24 h-24 rounded-full mx-auto" src={item.img} alt="" width="384" height="512" />
                                    <div className="p-6 text-center space-y-4">
                                        <h3>{item.title}</h3>
                                        <div className="flex justify-evenly">
                                            <a target="_blank" rel="noreferrer" href={item.live}><TbWorld /></a>
                                            <a target="_blank" rel="noreferrer" href={item.github}><AiFillGithub /></a>
                                        </div>
                                    </div>
                                </figure>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
};

export default Design;