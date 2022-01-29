import { BookstoreServiceConsumer } from "../bookstore-services-context";

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
       {
         (bookstoreService) => {
           return (
            <Wrapped {...props} bookstoreService={bookstoreService}/>
           )
         }
       }
      </BookstoreServiceConsumer>
    )
  }
}

export default withBookstoreService;