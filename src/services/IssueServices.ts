const ISSUES = [
  {
    id: 1,
    title: "Create dropdown for book genres",
    description: "To create a dropdown for book genres in the book form.",
  },
  {
    id: 2,
    title: "Create a form for adding new books",
    description: "To create a form for adding new books to the library.",
  },
];

class IssueServices {
  get() {
    return ISSUES;
  }

  getById({ id }: { id: number }) {
    return ISSUES.find((issue) => issue.id === id);
  }

  create({ body }: { body: { title: string; description: string } }) {
    const newIssue = {
      id: ISSUES.length + 1,
      title: body.title,
      description: body.description,
    };
    ISSUES.push(newIssue);
    console.log("Created new issue: ", newIssue);
    return newIssue;
  }

  update({
    id,
    body,
  }: {
    id: number;
    body: { title: string; description: string };
  }) {
    const issue = ISSUES.find((issue) => issue.id === id);
    if (!issue) return;
    issue.title = body.title;
    issue.description = body.description;
    return issue;
  }

  delete({ id }: { id: number }) {
    const issueIndex = ISSUES.findIndex((issue) => issue.id === id);
    if (issueIndex === -1) return;
    const deletedIssue = ISSUES.splice(issueIndex, 1);
    return deletedIssue;
  }
}

export default new IssueServices();
