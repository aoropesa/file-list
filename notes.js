FileList
  FileListItem
    FileIcon
    FileName
    CommitMessage
    Time

What data does each component need?
-FileList: one prop files, array of files
-FileListItem: one prop file, an object that has the following->name, type,
commit whit a message, last modified time.
-FileName: takes a file object, expect that it has a name
-FileIcon: takes a file object, we render the icon based on the type
-CommitMessage: take a commit object whit a message property
-Time: takes a string
