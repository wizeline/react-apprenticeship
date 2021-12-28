const withDummyText = (WrappedComponent : any) => (props : any) => {
    const data = "DUMMY TEXT";
    return (<WrappedComponent data={data} {...props} />);
}

export default withDummyText;