import { SuccessContent } from "./_components/SuccessContent";

export default async function Success({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const session_id = (await searchParams).session_id
  
  return (
    <SuccessContent session_id={session_id}  />
  )
}