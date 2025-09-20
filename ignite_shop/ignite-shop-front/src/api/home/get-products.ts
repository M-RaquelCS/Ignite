export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    props: {},
  };
}