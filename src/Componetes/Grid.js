import React from 'react';
import  {Link} from 'react-router-dom';

export default function Grid ({posts}){

    const  columnas = posts.reduce((columnas,post) =>{
        const ultimaColumna = columnas[columnas.length -1];
        if(ultimaColumna && ultimaColumna.length < 3){
            ultimaColumna.push(post);
        }else{
            columnas.push([post]);
        }
        return columnas;
    },[]); //Empieza con un array vacio que coloco en la variable :columnas:

    return (
        <div>
        {
            columnas.map((columna,index) =>{
                return (
                    <div key={index} className="Grid__row">
                    {
                        columna.map(post =>(
                            <GridFoto  key={post._id} {...post}></GridFoto>
                        ))
                    }
                    </div>
                )
            })
        }
        </div>

    );
}

function GridFoto({_id,url,caption}){
    return (
        <Link to={`/post/${_id}`} className="Grid__post">
            <img src={url} alt={caption} className="Grid__post-img"/>
        </Link>
    )
}