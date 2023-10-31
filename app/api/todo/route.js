import CONNECT_DATABASE from "@/app/config/connection";
import Todo from "@/app/models/todoModel";
import { NextResponse } from "next/server";

export async function GET(req){
    await CONNECT_DATABASE();
    const alltodos = await Todo.find();
    return NextResponse.json({message:'Fetch Successfully',resp:alltodos});
}


export async function POST(req){
    await CONNECT_DATABASE();
    try{
        const rec = await req.json();
        console.log(rec);

        const scheme = Todo({
            task:rec.task,
            description:rec.description,
        });
        const myData = await scheme.save();
        console.log(scheme);
        console.log(myData);
        if(myData){
            return NextResponse.json({message:'Added Successfully',resp:myData},{status:201});
        }
        else{
            return NextResponse.json({message:'Failed to Addition'},{status:403});
        }
    }
    catch(e){
        console.log(e);
        return NextResponse.json({message:'Internal Server Error'})

    }
}