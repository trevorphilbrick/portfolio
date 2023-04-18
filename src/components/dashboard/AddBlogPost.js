import { Formik } from "formik";
import { Container, Row, Col } from "react-grid-system";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const AddBlogPost = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h2>Add Blog Post</h2>
          </Col>
        </Row>
        <Formik
          initialValues={{ title: "", content: "" }}
          onSubmit={async (values, { resetForm }) => {
            await addDoc(collection(db, "blog-posts"), {
              title: values.title,
              content: values.content,
              createdAt: serverTimestamp(),
            });
            resetForm();
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <label className="blog-column-label">
                    Blog Title
                    <input
                      type="text"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      className="blog-input"
                    />
                  </label>
                </Col>
              </Row>

              <Row>
                <Col>
                  <label className="blog-column-label">
                    Blog Content
                    <textarea
                      name="content"
                      rows={24}
                      value={values.content}
                      onChange={handleChange}
                      className="blog-input"
                    />
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <button type="submit">Submit</button>
                </Col>
              </Row>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default AddBlogPost;
