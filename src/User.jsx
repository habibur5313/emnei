export default function User ({user}) {
                    console.log(user);
                   
                    const {name, email} = user
                    return(
                                        <div className="box1">
                                                            <h1>Name:{name} </h1>
                                                            <h1>Email:{email} </h1>
                                        </div>
                    )
}