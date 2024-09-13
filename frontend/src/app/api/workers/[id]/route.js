import { NextResponse } from "next/server";
import listOfWorkers from "../workers.json";

export async function GET(_request, { params }) {
  const { id } = params;
  const { workers } = listOfWorkers

  if (!id) {
    return NextResponse.json({ error: 'ID parameter is missing' }, { status: 400 });
  }

  const workerId = parseInt(id, 10);
  const worker = workers.find(worker => worker.id === workerId);

  if (!worker) {
    return NextResponse.json({ error: 'Worker not found' }, { status: 404 });
  }

  return NextResponse.json(worker)
}