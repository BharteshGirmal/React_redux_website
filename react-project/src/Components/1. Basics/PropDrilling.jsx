const Componment1 = (prop) => {
  return <Componment2 user={prop.user} />;
};

const Componment2 = (prop) => {
  return <Componment3 user={prop.user} />;
};

const Componment3 = (prop) => {
  return <FinalComponent user={prop.user} />;
};

const FinalComponent = (prop) => {
  return <h4>{prop.user}</h4>;
};

export default function PropDrilling() {
  const user = "Bhartesh";
  return <Componment1 user={user} />;
}
