import Title from './Title';
 import {Visions as visions} from './data';
 import  Vision  from './Vision';

 const Visions = () => {
  return (
        <section className="section" id="visions">
<Title title='our' subTitle='visions'/>

      <div className='section-center vision-center'>
        {visions.map((vision) => {
return <Vision key={vision.id} {...vision} />
        })}
      </div>
    </section>
    
  );
};
export default Visions;